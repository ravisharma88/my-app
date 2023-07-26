import React from "react";
import { links } from "./HeaderLinks";
import { Menu, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function BurgerMenu() {
    const [opened, { toggle }] = useDisclosure(false);
    const items = links.map((item) => 
        <Menu.Item
            key={item.label}
            component="a"
            href={item.link}
        >
            {item.label}
        </Menu.Item>
    );

    return (
        <Menu width={200} shadow="md" opened={opened}>
            <Menu.Target>
                <Burger opened={opened} onClick={toggle} size="sm" />
            </Menu.Target>

            <Menu.Dropdown>
                {items}
            </Menu.Dropdown>
        </Menu>
    )
}