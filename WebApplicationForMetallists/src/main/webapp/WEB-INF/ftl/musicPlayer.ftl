<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Music Player</title>
    <link href="/WEB-INF/css/musicPlayer.css" rel="stylesheet" type="text/css">
</head>
<body>

<#--<div class="music-player">-->
<#--    <img src="https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=9dea5064c1d0b9f8969216204ba66c73" class="album" />-->
<#--    <div class="dash">-->
<#--        <a href="#mute" class="fa fa-volume-up"></a>-->
<#--        <span class="volume-level">-->
<#--      <em style="width: 75%"></em>-->
<#--    </span>-->
<#--        <a href="#share" class="fa fa-share"></a>-->
<#--        <a href="#love" class="fa fa-heart"></a>-->
<#--        <div class="seeker">-->
<#--            <div class="wheel">-->
<#--                <div class="progress"></div>-->
<#--            </div>-->
<#--        </div>-->
<#--        <a href="#seek"></a>-->
<#--        <div class="controls">-->
<#--            <a href="#back" class="fa fa-fast-backward"></a>-->
<#--            <a href="#play" class="fa fa-pause"></a>-->
<#--            <a href="#forward" class="fa fa-fast-forward"></a>-->
<#--        </div>-->
<#--        <div class="info">-->
<#--            <i><span name="current">0:00</span> / <span name="duration">0:00</span></i>-->
<#--            <label>Marteria - OMG</label>-->
<#--            <small>Zum Glück in die Zukunft II</small>-->
<#--        </div>-->
<#--    </div>-->
<#--</div>-->
<script src="/WEB-INF/js/musicPlayer.js"></script>
<div class="player">
    <span id="arm"></span>
    <ul>
        <li class="artwork">
        </li>
        <li class="info">
            <h1 id="artist">loading</h1>
            <h4 id="album">loading</h4>
            <h2 id="song">loading</h2>
            <div class="button-items">
                <audio id="music" preload="auto">
                </audio>
                <div id="slider">
                    <div id="elapsed"></div>
                    <div id="buffered"></div>
                </div>
                <p id="timer">0:00</p>
                <div class="controls">
					<span class="expend">
						<svg id="previous" class="step-backward" viewBox="0 0 25 25" xml:space="preserve">
							<g>
								<polygon points="4.9,4.3 9,4.3 9,11.6 21.4,4.3 21.4,20.7 9,13.4 9,20.7 4.9,20.7"/>
							</g>
						</svg>
					</span>
                    <svg id="play" viewBox="0 0 25 25" xml:space="preserve">
						<defs>
                            <rect x="-49.5" y="-132.9" width="446.4" height="366.4"/>
                        </defs>
                        <g>
                            <circle fill="none" cx="12.5" cy="12.5" r="10.8"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.7,6.9V18c0,0,0.2,1.4,1.8,0l8.1-4.8c0,0,1.2-1.1-1-2L9.8,6.5 C9.8,6.5,9.1,6,8.7,6.9z"/>
                        </g>
					</svg>
                    <svg id="pause" viewBox="0 0 25 25" xml:space="preserve">
						<g>
                            <rect x="6" y="4.6" width="3.8" height="15.7"/>
                            <rect x="14" y="4.6" width="3.9" height="15.7"/>
                        </g>
					</svg>
                    <span class="expend">
						<svg id="next" class="step-foreward" viewBox="0 0 25 25" xml:space="preserve">
							<g>
								<polygon points="20.7,4.3 16.6,4.3 16.6,11.6 4.3,4.3 4.3,20.7 16.7,13.4 16.6,20.7 20.7,20.7"/>
							</g>
						</svg>
					</span>
                    <div class="slider">
                        <div class="volume"></div>
                        <input type="range" id="volume" min="0" max="1" step="0.01" value="1" />
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
</body>
</html>