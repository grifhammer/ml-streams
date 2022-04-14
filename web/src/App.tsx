import "./App.css";

function App() {
	return (
		<div className="App">
			<video
				id="player"
				className="video-js vjs-default-skin"
				height="360"
				width="640"
				controls
				preload="none"
			>
				<source
					src="http://localhost:8080/hls/stream.m3u8"
					type="application/x-mpegURL"
				/>
			</video>
			<script>var player = videojs('#player');</script>
		</div>
	);
}

export default App;
