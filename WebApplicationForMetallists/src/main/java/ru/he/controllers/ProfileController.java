package ru.he.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import ru.he.dto.UserDto;
import ru.he.models.entities.FileInfo;
import ru.he.repositoriesJpa.FileInfoRepository;
import ru.he.security.details.UserDetailsImpl;
import ru.he.services.FileInfoService;

import javax.servlet.http.HttpSession;

import java.util.List;

import static ru.he.dto.UserDto.from;

@Controller
@RequestMapping("/")
public class ProfileController {

    @Autowired
    private FileInfoService fileInfoService;

    @Autowired
    private FileInfoRepository fileInfoRepository;

    @GetMapping
    public String getProfilePage(HttpSession session, @ModelAttribute("model") ModelMap model, Authentication authentication) {
        if (authentication == null) {
            return "redirect:/signIn";
        }

        UserDetailsImpl details = (UserDetailsImpl)authentication.getPrincipal();
        UserDto user = from(details.getUser());
        model.addAttribute("user", user);

        //так не работает
//        String email = (String) session.getAttribute("user-email");

        String email = user.getEmail();
        List<FileInfo> fileInfos = fileInfoRepository.findAllByEmail(email);
        model.addAttribute("files", fileInfos);
        return "profile";
    }

    @PostMapping
    public String uploadFileView(@RequestParam("file") MultipartFile multipartFile, HttpSession session, ModelMap model, Authentication authentication) {
//        String email = (String) session.getAttribute("user-email");
//        System.out.println("Email from current session: " + email);

        UserDetailsImpl details = (UserDetailsImpl)authentication.getPrincipal();
        UserDto user = from(details.getUser());
        String email = user.getEmail();

        FileInfo fileInfo = new FileInfo();
        fileInfo.setMultipartFile(multipartFile);
        fileInfo.setEmail(email);

        fileInfoService.save(fileInfo);

        model.addAttribute("file_url", fileInfo.getStorageFileName());
        return "redirect:/";
    }

    @GetMapping("/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> saveFile(@PathVariable String filename) {
        FileInfo fileInfo = fileInfoService.getFileInfoByStorageFilename(filename);
        Resource resource = fileInfoService.getResourceByFileInfo(fileInfo);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileInfo.getOriginalFileName() + "\"")
                .body(resource);
    }

}
