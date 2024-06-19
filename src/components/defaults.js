import {v4 as uuidv4} from "uuid";

export function defaultBlocks() {
    let data = [];
    let header1 = structuredClone(header);
    header1.id = uuidv4();
    header1.data.image = 'https://wysiwihyg.netlify.app/images/header2.jpg';
    header1.data.firstLine.text = 'Say hi to almost the best (or at least the simplest)';
    header1.data.firstLine.font.size = 60;
    header1.data.secondLine.text = 'Web Editor!';
    header1.data.secondLine.font.size = 60;
    data.push(header1);

    let twoColumns1 = structuredClone(twoColumns);
    twoColumns1.id = uuidv4();
    data.push(twoColumns1);

    let header2 = structuredClone(header);
    header2.id = uuidv4();
    data.push(header2);

    return {
        items: data,
        user: null
    };
}

export let header = {
    "id": "",
    "type": "header",
    "data": {
        "firstLine": {
            "text": "First line",
            "font": {
                "name": "Parisienne",
                "size": 60
            }
        },
        "secondLine": {
            "text": "second line",
            "font": {
                "name": "Roboto",
                "size": 40
            }
        },
        "image": "https://wysiwihyg.netlify.app/images/header1.jpg"
    }
};


export let twoColumns = {
    "id": "",
    "type": "two-columns",
    "data": {
        "one": {
            "firstLine": {
                "text": "First line",
                "font": {
                    "name": "Parisienne",
                    "size": 60
                }
            },
            "secondLine": {
                "text": "second line",
                "font": {
                    "name": "Parisienne",
                    "size": 40
                }
            },
            "paragraph": {
                "text": "Lorem ipsum",
                "font": {
                    "name": "Parisienne",
                    "size": 40
                }
            },
            "image": {
                "src": "",
                "type": "right"
            }
        },
        "two": {
            "firstLine": {
                "text": "First line",
                "font": {
                    "name": "Parisienne",
                    "size": 60
                }
            },
            "secondLine": {
                "text": "second line",
                "font": {
                    "name": "Parisienne",
                    "size": 40
                }
            },
            "paragraph": {
                "text": "Lorem ipsum",
                "font": {
                    "name": "Parisienne",
                    "size": 40
                }
            },
            "image": {
                "src": "",
                "type": "left"
            }
        }
    }
}