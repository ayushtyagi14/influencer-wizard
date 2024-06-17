export interface Criteria {
    cost: number[];
    gender: string[];
    rating: number[];
    followers: number[];
}

export interface Influencer {
    id: number;
    name: string;
    rating: number;
    cost: number;
    follower: number;
    availability: boolean; // Correct spelling of the property
    avatar: string;
}