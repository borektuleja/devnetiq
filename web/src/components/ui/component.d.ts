type Props<T extends React.ElementType> = React.ComponentProps<T>;

type PropsWithout<
	T extends React.ElementType,
	K extends keyof React.ComponentProps<T>,
> = Omit<React.ComponentProps<T>, K>;
