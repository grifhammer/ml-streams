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
					src="https://twitter.com/i/status/1508237357547458570"
					type="application/x-mpegURL"
				/>
			</video>
			<script>var player = videojs('#player');</script>
		</div>
	);
}

export default App;
