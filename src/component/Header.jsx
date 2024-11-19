import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function Header() {
    return (
        <Navbar fluid className="dark:bg-white">
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold">Nabillah N</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Nabillah</span>
                        <span className="block truncate text-sm font-medium">nabillahnovitania@gmail.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse> 
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">Youtube</Navbar.Link>
                <Navbar.Link href="https://www.instagram.com/nabillah__n/profilecard/?igsh=MTBhcmo2Mmljdnp3MA== ">Instagram</Navbar.Link>
                <Navbar.Link href="https://www.linkedin.com/in/nabillah-novitania-22bba7338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">Linkendln</Navbar.Link>
                <Navbar.Link href="https://github.com/Nabillah234">Github</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
        
        
    );
    
}

