interface IProps {
	children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => (
	<div className="bg-red">{children}</div>
);

export default Layout;
