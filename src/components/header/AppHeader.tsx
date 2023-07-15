import React from "react";
import { Header, Group, useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useStyles } from "./HeaderStyles";
import { links } from "./HeaderLinks";
import BurgerMenu from "./BurgerMenu";

export function AppHeader() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    const { classes } = useStyles();

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={56} className={classes.header} mb={120}>
            <div className={classes.inner}>
                <Group className={classes.burger}>
                    <BurgerMenu/>
                </Group>

                <Group spacing={5} className={classes.links}>
                        {items}
                </Group>

                <Group>
                    <ActionIcon
                        variant="outline"
                        color={dark ? 'yellow' : 'blue'}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
                    </ActionIcon>
                </Group>
            </div>
        </Header>
    );
}