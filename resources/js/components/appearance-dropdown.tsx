import { useState, useEffect } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Palette } from "lucide-react";
import { cn } from "@/lib/utils";

const THEMES = ['light', 'dark', 'system', 'blue', 'daltonic', 'rainbow'] as const;
type Theme = typeof THEMES[number];

const AppearanceDropdown = ({ ...props }: React.ComponentProps<"div">) => {
    const [theme, setTheme] = useState<Theme>(() => {

        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme && THEMES.includes(savedTheme)) {
            return savedTheme;
        }
        return 'system';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(...THEMES);

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            root.classList.add(systemTheme);
        } else {
            root.classList.add(theme);
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const currentIcon = (() => {
        if (theme === 'dark') {
            return <Moon />;
        }
        if (theme === 'light' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: light)').matches)) {
            return <Sun />;
        }
        return <Palette />;
    })();

    return (
        <div {...props}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn("h-7 w-7")}
                    >
                        {currentIcon}
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {THEMES.map((t) => (
                        <DropdownMenuItem key={t} onClick={() => setTheme(t)}>
                            {t.charAt(0).toUpperCase() + t.slice(1)}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default AppearanceDropdown;