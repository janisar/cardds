import './banner.css'
import {Button} from "./components/common/Button";
import {H2} from "./components/common/H2";
import {Text} from "./components/common/Text";

export const Banner = () => {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    return (
        <div className="banner">
            <H2>Hello there</H2>
            <Text color="white">{loremIpsum}</Text>
            <Button>Contact us</Button>
        </div>
    );
}