import { Card, List, Button, Space, Tag, Avatar } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Influencer {
    id: number;
    name: string;
    rating: number;
    cost: number;
    follower: number;
    availability: boolean;
    avatar: string; // Add avatar field to Influencer interface
    gender: string; // Add gender field to Influencer interface
}

interface Criteria {
    cost: number[];
    gender: string[]; // Include gender criteria
    rating: number[];
    followers: number[];
}

interface Props {
    criteria: Criteria;
    onSelect: (influencer: Influencer) => void;
    onBack: () => void;
}

const InfluencerList: React.FC<Props> = ({ criteria, onSelect, onBack }) => {
    const [influencers, setInfluencers] = useState<Influencer[]>([]);

    useEffect(() => {
        // Mock API call to fetch influencers (replace with actual API endpoint)
        axios.get('/api/influencers').then((response) => {
            setInfluencers(response.data.Influencers);
        });
    }, []);

    // Filter influencers based on criteria
    const filteredInfluencers = influencers.filter((influencer) => {
        return (
            influencer.cost >= criteria.cost[0] &&
            influencer.cost <= criteria.cost[1] &&
            influencer.rating >= criteria.rating[0] &&
            influencer.follower >= criteria.followers[0] &&
            (criteria.gender.length === 0 || criteria.gender.includes(influencer.gender)) // Check gender criteria
        );
    });

    return (
        <div className='p-10 my-6 max-w-2xl mx-auto bg-white rounded-lg'>
            <Button type="default" onClick={onBack} style={{ marginBottom: '10px' }}>
                Back
            </Button>
            <List
                grid={{ gutter: 16, column: 1 }}
                dataSource={filteredInfluencers}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            hoverable
                            title={item.name}
                            extra={
                                <Button type="primary" onClick={() => onSelect(item)}>
                                    Select
                                </Button>
                            }
                            actions={[
                                <Tag color={item.availability ? 'success' : 'error'} key="availability">
                                    {item.availability ? 'Available' : 'Not Available'}
                                </Tag>,
                                <Space key="ratingCostFollowers">
                                    <span>Rating: {item.rating}</span>
                                    <span>Cost: ₹{item.cost.toLocaleString()}</span>
                                    <span>Followers: {item.follower.toLocaleString()}</span>
                                </Space>,
                            ]}
                        >
                            <Avatar size={64} src={item.avatar} /> {/* Display avatar */}
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default InfluencerList;
