

import CardSlider from "@/components/CardSlider";

export const metadata = {
  title: "Slider",
  description: `3D slider created for Evaluation`,

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

const SliderPage = () => {
  return (
    <div className="relative">
      <CardSlider />
    </div>
  );
};

export default SliderPage;
