import type { Channel } from "pusher-js";
import { useEffect, useRef } from "react";

export default function useEvent<T>(channel: Channel | null, name: string, callback: (data: T) => void) {
	const callbackRef = useRef(callback);
	callbackRef.current = callback;

	useEffect(() => {
		if (!channel) return;

		const handler = (data: T) => {
			callbackRef.current(data);
		};

		channel.bind(name, handler);
		return () => {
			channel.unbind(name, handler);
		};
	}, [channel, name]);
}
