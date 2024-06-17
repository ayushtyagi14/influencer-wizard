import { Checkbox, Slider, Form, Button, Typography, Radio, Rate, InputNumber } from 'antd';
import { useState } from 'react';
import { Criteria } from '@/Types';

const { Title, Paragraph } = Typography;

interface Props {
    onNext: (criteria: Criteria) => void;
}

const CriteriaSelection: React.FC<Props> = ({ onNext }) => {
    const [criteria, setCriteria] = useState<Criteria>({
        cost: [0, 50000],
        gender: [],
        rating: [0, 5],
        followers: [0, 250000],
    });

    const onFinish = () => {
        onNext(criteria);
    };

    return (
        <div className="p-10 my-6 max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
            <Title level={2} className="text-center">Select Your Criteria</Title>
            <Paragraph className="text-center mb-10">Choose the criteria that best fits your needs to find the perfect influencer.</Paragraph>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label={<span className="text-lg mb-6 block">Cost</span>}>
                    <Slider
                        range
                        max={50000}
                        defaultValue={criteria.cost}
                        onChange={(value) => setCriteria({ ...criteria, cost: value as number[] })}
                        tooltip={{ open: true }}
                    />
                </Form.Item>
                <Form.Item label={<span className="text-lg mb-2 block">Gender</span>}>
                    <Radio.Group
                        options={['Male', 'Female']}
                        onChange={(e) => setCriteria({ ...criteria, gender: [e.target.value] })}
                        optionType="button"
                        buttonStyle="solid"
                    />
                </Form.Item>
                <Form.Item label={<span className="text-lg mb-2 block">Rating (Minimum)</span>}>
                    <Rate
                        allowHalf
                        defaultValue={criteria.rating[1]}
                        onChange={(value) => setCriteria({ ...criteria, rating: [0, value || 0] })}
                    />
                </Form.Item>
                <Form.Item label={<span className="text-lg mb-2 block">Followers (Minimum)</span>}>
                    <InputNumber
                        min={0}
                        max={250000}
                        defaultValue={criteria.followers[0]}
                        onChange={(value) => setCriteria({ ...criteria, followers: [value || 0, 250000] })}
                        className="w-full"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full py-2">
                        Next
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CriteriaSelection;
