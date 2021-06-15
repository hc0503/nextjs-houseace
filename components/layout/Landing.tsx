interface IProps {
	children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => (
	<div>{children}</div>
);

export default Layout;
