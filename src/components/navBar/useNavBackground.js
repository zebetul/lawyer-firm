import { debounce } from "lodash";
import { useEffect, useState } from "react";

function useNavBackground() {
	const [isNavBackground, setIsNavBackground] = useState(false);

	useEffect(() => {
		const handleScroll = debounce(() => {
			if (window.scrollY > 200) {
				setIsNavBackground(true);
			} else {
				setIsNavBackground(false);
			}
		}, 100);

		if (window.location.pathname !== "/") {
			setIsNavBackground(true);
		} else {
			// setIsNavBackground(false);

			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return { isNavBackground };
}

export default useNavBackground;
