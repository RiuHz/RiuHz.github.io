"use strict";

import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function escapeHTML(string) {
    return string
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

const projects = JSON.parse(
    readFileSync(join(__dirname, "projects.json"), "utf-8")
);

const projectsHTML = projects.map(project => `
                <section class="project">
                    <h3>${escapeHTML(project.title)}</h3>
                    <span>${project.languages.map(escapeHTML).join(" ")}</span>
                    <p>${escapeHTML(project.origin)}</p>
                    <p>${escapeHTML(project.description)}</p>
                </section>
`).join("\n");

const template = readFileSync(
    join(__dirname, "../index.html"),
    "utf-8"
);

const output = template.replace(
    "<!-- PROJECTS -->",
    projectsHTML
);

writeFileSync(
    join(__dirname, "../index.html"),
    output
);
