import { Card, Button, Typography, Avatar } from 'antd';
import { Influencer } from '@/Types';
import { useState } from 'react';

const { Title, Text } = Typography;

interface Props {
    influencer: Influencer;
    onBack: () => void;
    onStart: () => void;
}

const Booking: React.FC<Props> = ({ influencer, onBack, onStart }) => {
    const [showConfirm, setShowConfirm] = useState(false)

    const handleConfirm = () => {
        setShowConfirm(true)
    }

    return (
        <div className="p-6 my-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
            {!showConfirm ?
                <>
                    <div className="text-center mb-4">
                        <Title level={3} className="mb-2">Booking Confirmation</Title>
                        <Text type="secondary">Review and confirm your selected influencer</Text>
                    </div>
                    <div className="mb-4">
                        <Card>
                            <Avatar size={64} src={influencer.avatar} />
                            <p className="my-2"><strong>Name:</strong> {influencer.name}</p>
                            <p className="mb-2"><strong>Rating:</strong> {influencer.rating}</p>
                            <p className="mb-2"><strong>Cost:</strong> ₹{influencer.cost.toLocaleString()}</p>
                            <p className="mb-2"><strong>Followers:</strong> {influencer.follower.toLocaleString()}</p>
                        </Card>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Button type="primary" onClick={handleConfirm} className="w-1/2">
                            Confirm Booking
                        </Button>
                        <Button type="default" onClick={onBack} className="w-1/2">
                            Back
                        </Button>
                    </div>
                </>
                :
                <>
                    <div className="text-center mb-4">
                        <Title level={3} className="mb-2">Booking Confirmed!</Title>
                        <Text type="secondary">We will reach back to you with further details of the Influencer.</Text>
                    </div>
                    <div className="mb-4">
                        <Card>
                            <Avatar size={64} src={influencer.avatar} />
                            <p className="my-2"><strong>Name:</strong> {influencer.name}</p>
                            <p className="mb-2"><strong>Rating:</strong> {influencer.rating}</p>
                            <p className="mb-2"><strong>Cost:</strong> ₹{influencer.cost.toLocaleString()}</p>
                            <p className="mb-2"><strong>Followers:</strong> {influencer.follower.toLocaleString()}</p>
                        </Card>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Button type="default" onClick={onStart} className="w-1/2 mx-auto">
                            Find New Influencer
                        </Button>
                    </div>
                </>
            }
        </div>
    );
};

export default Booking;
