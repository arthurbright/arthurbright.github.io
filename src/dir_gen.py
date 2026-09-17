# IMPORTANT: THIS MUST BE RUN FROM THE ROOT DIRECTORY (not within src)

import json

from pathlib import Path

def get_directory_structure(directory):
    directory = Path(directory)

    structure = {
        "name": directory.name,
        "type": "directory",
        "children": []
    }

    for item in sorted(directory.iterdir()):
        # directory
        if item.is_dir():
            structure["children"].append(
                get_directory_structure(item)
            )
        elif item.is_file():
            if(item.name.endswith(".txt")):
                # text file; read contents
                with open(item.absolute(), "r", encoding="utf-8") as f:
                    contents = f.read()
                contents = contents.replace("\n", "<br>")

                structure["children"].append({
                    "name": item.name[:-4],
                    "type": "file",
                    "contents": contents
                })
            else:
                # other file; serve it directly
                structure["children"].append({
                    "name": item.name,
                    "type": "served_file",
                    "full_path": str(item.relative_to(Path("./")))
                })

    return structure


directory = "./src/~"

structure = get_directory_structure(directory)

with open("generated/directory_structure.json", "w", encoding="utf-8") as f:
    json.dump(structure, f, indent=4)

print("Success!")