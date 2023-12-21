import { MarkText } from "@/components/Home/landingPage/LandingPage";
import CustomHead from "@/components/common/CustomHead";
import CustomizableSliderTemplates from "@/components/common/CustomizableSliderTemplates";
import FaqsBox from "@/components/common/FAQs";
import FreeTrialBlackBanner from "@/components/common/FreeTrialBlackBanner";
import GetTemplates from "@/components/common/GetTemplates";
import LeftDetail from "@/components/common/LeftDetail";
import QuestionsTitle from "@/components/common/QuestionsTitle";
import RightDetail from "@/components/common/RightDetail";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const sliderTemplate = [
  {
    img: "/images/invitationwedding.png",
    buttonName: "Wedding Invitation",
    path: "/wedding",
  },
  {
    img: "/images/invitationFooterBirthday.png",
    buttonName: "Birthday Invitation",
    path: "/birthday",
  },
  {
    img: "/images/partyBanner.png",
    buttonName: "Party Invitation",
    path: "/party",
  },
  {
    img: "/images/babyShowerEase.png",
    buttonName: "Baby Shower Invitation",
    path: "/babyShower",
  },
  {
    img: "/images/anivversaryEase.png",
    buttonName: "Anniversary Invitation",
    path: "/anniversary",
  },
  {
    img: "/images/bridalEase.png",
    buttonName: "Bridal Shower Invitation",
    path: "/bridalShower",
  },
];

export default function index() {
  return (
    <>
      <CustomHead
        image="/images/invitationCreateWedding.png"
        heading="Let Your Invitation Shine with Our Smooth and Sleek Invitation Maker"
        text=" Make lovely invitations for birthdays, baby showers, weddings, and
        save-the-dates. Regardless of the event, you can make beautiful,
        personalized invites and shop with confidence by choosing the
        finish type, size, and matching envelopes with the invitation
        templates maker."
      />
      <FreeTrialBlackBanner
        heading="Let Your Invitation Shine with Our Smooth and Sleek Invitation Maker"
        text=" Make lovely invitations for birthdays, baby showers, weddings, and
        save-the-dates. Regardless of the event, you can make beautiful,
        personalized invites and shop with confidence by choosing the
        finish type, size, and matching envelopes with the invitation
        templates maker. "
      />

      <RightDetail
        title="Key Features Of Crafty Art Invitation Card Maker"
        point={
          <Box>
            <MarkText text="Simplify Your Event Planning: Our invitation card maker streamlines the process, saving you time and stress." />
            <MarkText text="Stunning Designs, Effortlessly: Access a vast library of professionally designed templates, ensuring your invitations stand out." />
            <MarkText text="Personalization Made Easy: Customize every aspect of your invitations, from colors to fonts, to reflect your unique style." />
            <MarkText text="Budget-Friendly Solutions: Create beautiful invitations without breaking the bank, thanks to our cost-effective options." />
            <MarkText text="Fast and Easy Download Invitations: We offer quick turnaround times and high-quality flawless invitations." />
          </Box>
        }
        buttonName={"Start Designing"}
        alt="Invitation Maker"
        image="/images/perfactInvitation.png"
        path="/templates/invitation"
      />

      <LeftDetail
        title="Our Unique Invitations Selection"
        point={
          <Box>
            <MarkText text="Weddings: Craft the perfect wedding invitation that reflects your love story." />
            <MarkText text="Corporate Events: Impress clients and partners with professional and creative invites." />
            <MarkText text="Birthdays: Celebrate another year with invitations that match your style." />
            <MarkText text="Anniversaries: Commemorate milestones with elegant and personalized designs." />
            <MarkText text="Special Occasions: From baby showers, house warming to retirements, we have you covered." />
            <MarkText text="Engagement: Create a Perfect Engagement Invitation Card For Your Special Event." />
          </Box>
        }
        buttonName={"Start Designing"}
        alt="Invitation Maker"
        image="/images/invitationSelection.png"
        path="/templates/invitation"
      />

      <RightDetail
        title="Create Stunning Invitations in Minutes, Not Hours!"
        point={
          <Box>
            <MarkText text="Choose from a vast library of customizable invitation templates." />
            <MarkText text="Personalize every detail, from fonts to colors, to match your event's theme." />
            <MarkText text="Add your own photos and graphics to make your invitations truly unique." />
            <MarkText text="No design experience required - it's as easy as drag and drop!" />
            <MarkText text="Say goodbye to frustrating software crashes and slow loading times." />
          </Box>
        }
        buttonName={"Start Designing"}
        alt="Invitation Maker"
        image="/images/stunningInvitation.png"
        path="/templates/invitation"
      />

      <LeftDetail
        title="Make your INVITATION CARD in few minutes"
        point={
          <Box>
            <MarkText text=" Open website and login or signup with your easy method." />
            <MarkText text=" Search what do you want and select your best invitation card." />
            <MarkText text=" add your detail's such as your event or style." />
            <MarkText text=" save your invitation card and export in your preferred way." />
          </Box>
        }
        buttonName={"Start Designing"}
        alt="Invitation Maker"
        image="/images/makeInvitation.png"
        path="/templates/invitation"
      />

      <RightDetail
        title="How to create a unique wedding invitation
        that perfectly captures your love story?"
        point={
          <Box>
            <MarkText text="Choose a design that reflects your shared interests or incorporates personal details about your relationship" />
            <MarkText text="Customize the wording to include a heartfelt message or poem that expresses your love and excitement for the big day" />
            <MarkText text="Use high-quality paper and printing for a luxurious and memorable feel" />
            <MarkText text="Consider adding a unique touch, such as a custom wax seal or a miniature photo album, to make your invitation stand out" />
            <MarkText text="Order enough invitations for all guests plus extras for keepsakes and last-minute additions" />
          </Box>
        }
        buttonName={"Create your Wedding Invitation"}
        alt="Invitation Maker"
        image="/images/invitationCreateWedding.png"
        path="/wedding"
      />

      <LeftDetail
        title="How to design a birthday invitation that will
        get everyone excited for the celebration?"
        point={
          <Box>
            <MarkText text="Select a theme or colour scheme that matches the birthday person's personality or interests" />
            <MarkText text="Personalize the wording to reflect the party atmosphere and include fun details about the event, such as games, prizes, or entertainment" />
            <MarkText text="Use bright colors and bold typography to make invitation templates eye-catching and playful" />
            <MarkText text="Consider adding a personal touch, such as a hand-drawn illustration or a custom monogram, to make the invitation more special" />
            <MarkText text="Send out the invitations well in advance of the party date to build anticipation and excitement." />
          </Box>
        }
        buttonName={"Find Birthday Invitation"}
        alt="Invitation Maker"
        image="/images/invitationBirthday.png"
        path="/birthday"
      />

      <RightDetail
        title="How to make a party invitation that stands
        out from the crowd?"
        point={
          <Box>
            <MarkText text="Choose a design that reflects the type of party you're throwing and sets the tone for the event" />
            <MarkText text="Customize the wording to include key information about the party, such as dress code, theme, or special activities" />
            <MarkText text="Use a witty or clever tagline to make the  invitation memorable and encourage attendance" />
            <MarkText text="Include clear RSVP information and a deadline to help with planning and preparation" />
            <MarkText text="Send out the invitations through multiple channels, such as email, social media, and physical mail, to reach a wider audience." />
          </Box>
        }
        buttonName={"Design your Party Invitation"}
        alt="Invitation Maker"
        image="/images/invitationDesign.png"
        path="/party"
      />

      <LeftDetail
        title="How to create a heartwarming baby shower
        invitation that celebrates the new arrival?"
        point={
          <Box>
            <MarkText text="Choose a design that reflects the baby's gender or incorporates elements of the nursery theme" />
            <MarkText text="Include all necessary information, such as the date, time, location, and gift registry details" />
            <MarkText text="Use soft colors and playful fonts to create a warm and welcoming feel" />
            <MarkText text="Consider adding a fun activity, such as a name guessing game or diaper raffle, to make the shower more memorable" />
            <MarkText text="Send out the invitation template with a personalized message or note to show your appreciation for guests' attendance." />
          </Box>
        }
        buttonName={"Create Your Invitation Card"}
        alt="Invitation Maker"
        image="/images/invitationCreate.png"
        path="/babyShower"
      />

      <RightDetail
        title="How to design an anniversary invitation that
        honors the couple's love and commitment?"
        point={
          <Box>
            <MarkText text="Choose a design that reflects the couple's style and personality, such as a vintage inspired layout or a modern minimalist approach" />
            <MarkText text="Customize the wording to include a heartfelt message or quote that celebrates the milestone achievement" />
            <MarkText text="Incorporate personal touches, such as photographs or mementos from throughout the years, to add sentimental value" />
            <MarkText text="Use high-quality materials and printing techniques to create a lasting keepsake for the couple and their guests" />
            <MarkText text="Send out the invitation template with a thoughtful note or gesture to let the couple know how much they mean to you." />
          </Box>
        }
        buttonName={"Find your Anniversary Invitation"}
        alt="Invitation Maker"
        image="/images/invitationAnniversary.png"
        path="/anniversary"
      />

      <LeftDetail
        title="How to create a chic bridal shower invitation
        that sets the tone for a stylish celebration?"
        point={
          <Box>
            <MarkText text="Choose a design that reflects the bride's taste and bridal shower theme, such as a boho floral layout or a glamorous gold foil design" />
            <MarkText text="Customize the wording to include key details about the event, such as the dress code, activities planned, and gift registry details" />
            <MarkText text="Use trendy fonts and elegant graphics to create a sophisticated and modern look" />
            <MarkText text="Consider adding a fun activity or game to get guests excited and engaged" />
            <MarkText text="Include clear RSVP information and deadline to help with planning and preparation." />
          </Box>
        }
        buttonName={"Design your Bridal Shower Invitation"}
        alt="Invitation Maker"
        image="/images/invitationShower.png"
        path="/bridalShower"
      />

      <Box
        sx={{
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "1000px",
        }}
        className="w-[100%] sm:w-[80%] lg:w-[60%] px-[20px] my-[30px] lg:my-[100px]"
      >
        <QuestionsTitle
          text1={"Some Popular"}
          text2={"Questions/Answered"}
          text3=""
        />
        <Box sx={{ p: "20px" }}></Box>
        <FaqsBox
          heading="1. What are the available design templates for invitations?  "
          text="Our invitation maker offers a wide range of design templates to choose from, including options for birthdays, weddings,
          baby showers, graduations, and more."
        />
        <FaqsBox
          heading="2. Can I customize the text and images on the invitations?"
          text="Yes, our invitation maker allows you to personalize your invitations with your own text and images. You can also
          experiment with different fonts, colors, and layouts to create a unique look that matches your event."
        />
        <FaqsBox
          heading="3. How can I share my invitations with guests? "
          text="You can share your invitations via email, social media, or print. Our platform makes it easy to send your invitations
          directly to your guests' inboxes or share them on your social media accounts."
        />
        <FaqsBox
          heading="4. Can I preview my invitations before sending them out?"
          text="Yes, our invitation maker comes with a preview feature that allows you to see how your finished invitations will look. You
          can make any necessary changes before sending them out to ensure they are error-free and visually appealing."
        />
        <FaqsBox
          heading="5. Is the invitation maker free to use?"
          text="We offer both free and paid options for using our invitation maker. The free version allows you to access basic features
          and templates, while the paid version offers advanced customization options and premium templates."
        />
      </Box>

      <GetTemplates
        heading="Unlock The Creativity Of Your Inner Designer With 5000+ Invitation Templates."
        text="Create unforgettable moments with personalized invitations"
        navigate="/templates/invitation-card"
      />
      <Box
        sx={{
          width: "100%",
          my: "50px",
          mx: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          maxWidth: "2400px",
        }}
      >
        <QuestionsTitle
          text1={""}
          text2={"Get a headstart with fully customizable templates"}
          text3=""
        />

        <CustomizableSliderTemplates data={sliderTemplate} />
      </Box>
    </>
  );
}
