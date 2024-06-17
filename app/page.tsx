"use client";

import { useState, useEffect } from 'react';
import CriteriaSelection from '@/components/CriteriaSelection';
import Booking from '@/components/Booking';
import InfluencerList from '@/components/InfluencerList';
import { Steps, Typography } from 'antd';
import { Criteria, Influencer } from '@/Types';

const { Step } = Steps;
const { Title } = Typography;

const Home = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [criteria, setCriteria] = useState<Criteria | null>(null);
  const [selectedInfluencer, setSelectedInfluencer] = useState<Influencer | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);
  const firstStep = () => setCurrentStep(currentStep - 2);

  const handleSelectInfluencer = (influencer: Influencer) => {
    setSelectedInfluencer(influencer);
    nextStep();
  };

  if (!mounted) return null;

  return (
    <div className="p-10 my-5 max-w-4xl mx-auto bg-[#ffffff] rounded-lg shadow-lg">
      <Title level={2} className="text-center">Influencer Search Wizard</Title>
      <Steps current={currentStep} className="mb-10">
        <Step title="Criteria Selection" />
        <Step title="Influencer List" />
        <Step title="Booking Confirmation" />
      </Steps>

      {currentStep === 0 && (
        <CriteriaSelection
          onNext={(criteria) => {
            setCriteria(criteria);
            nextStep();
          }}
        />
      )}

      {currentStep === 1 && criteria && (
        <InfluencerList
          criteria={criteria}
          onSelect={handleSelectInfluencer}
          onBack={prevStep}
        />
      )}

      {currentStep === 2 && selectedInfluencer && (
        <Booking
          influencer={selectedInfluencer}
          onBack={prevStep}
          onStart={firstStep}
        />
      )}
    </div>
  );
};

export default Home;
