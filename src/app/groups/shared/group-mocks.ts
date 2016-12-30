import { Group } from './group';

export const GROUPDATA: Group[] = [
    { 
        id: 1,
        name: "Manwaring Xmas",
        rules: "This is the rules as a string",
        status: "Not-Matched",
        members: [
           { name: "Phillip", bio: "he's phil", wants: ["games", "games again", "games & games & games"] },
           { name: "Stephanie", bio: "she's a girl", wants: ["clothes", "stuff", "this is another really long item"] },
           { name: "Rondelle", bio: "she's a dog", wants: ["food", "kibblers", "a new bed", "claudia"] }
        ]
    },
       { 
        id: 2,
        name: "Godinez Secret Santa Swap",
        rules: "This is the rules as a string",
        status: "Not-Matched",
        members: [
           { name: "Phillip", bio: "he's phil", wants: ["games", "games again", "games & games & games"] },
           { name: "Stephanie", bio: "she's a girl", wants: ["clothes", "stuff", "this is another really long item"] },
           { name: "Rondelle", bio: "she's a dog", wants: ["food", "kibblers", "a new bed", "claudia"] }
        ]
    }
]