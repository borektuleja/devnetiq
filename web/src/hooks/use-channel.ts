import Pusher, { type Channel } from "pusher-js";
import { useEffect, useState } from "react";

const pusher = new Pusher("33ea019e9461040044ae", { cluster: "eu" });

export default function useChannel(name: string) {
	const [channel, setChannel] = useState<Channel | null>(null);

	useEffect(() => {
		const channel = pusher.subscribe(name);
		setChannel(channel);

		return () => {
			channel.unsubscribe();
			setChannel(null);
		};
	}, [name]);

	return channel;
}
