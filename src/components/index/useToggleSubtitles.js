import { useState, useEffect } from "react";

function useToggleSubtitles(subtitles) {
	const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);
	const [subtitle, setSubtitle] = useState(subtitles[1]);

	// Function to render the subtitle gradually
	const renderSubtitle = (subtitle) => {
		setSubtitle("");
		const subtitleArray = subtitle.split("");
		const subtitleLength = subtitleArray.length;

		for (let i = 0; i < subtitleLength; i++) {
			setTimeout(() => {
				setSubtitle((subtitle) => subtitle + subtitleArray[i]);
			}, 50 * i);
		}
	};

	// Set up an effect to update the subtitle periodically
	useEffect(() => {
		const interval = setInterval(() => {
			renderSubtitle(subtitles[currentSubtitleIndex]);

			// Toggle between the two subtitles
			setCurrentSubtitleIndex((currentSubtitleIndex) =>
				currentSubtitleIndex ? 0 : 1
			);
		}, 3000);

		// Clean up the interval when the component unmounts or the dependencies change
		return () => clearInterval(interval);
	}, [currentSubtitleIndex, subtitles]);

	return { subtitle };
}

export default useToggleSubtitles;
