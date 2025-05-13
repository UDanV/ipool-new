export interface CardAttribute {
    name: string;
    value: string;
}

export interface CardData {
    title: string;
    description: string;
    image: string;
    attributes: CardAttribute[];
}