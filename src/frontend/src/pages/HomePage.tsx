import { Button } from "../features/ui/button/Button";
import { ImageContainer } from "../features/ui/image-container/ImageContainer";
import front from "../assets/front.jpg";
import { Text } from "../features/ui/text/Text"; // Adjust the import path as necessary
import { ScrollSection } from "../features/scroll-section/ScrollSection";

export const HomePage = () => {

  return (
  <>
  
  <div>
      <h1>Home Page</h1>
      <ImageContainer src={front} alt={"PageImage"}/>
      
      <ScrollSection children={undefined} />
      <Text text="Velkommen til den koreanske fotballigaen" sx={{color: "#CC6469", fontSize: "2rem"}}
       />

      


      
    </div>

  <Button text="Dette er en knapp" 
  />;

  
  </>
  );
};
