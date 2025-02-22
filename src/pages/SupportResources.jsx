// import React from "react";
// import Footer from "../component/Footer";

// const SupportResources = () => {
//   const articles = [
//     {
//       id: 1,
//       title: "Recognizing the Signs of Suicide",
//       content:
//         "Recognizing the signs of suicide is crucial for intervention and prevention efforts. Some common signs include changes in behavior, such as withdrawal from social activities, sudden mood swings, and increased substance abuse.",
//       supportMaterial: [
//         {
//           id: 1,
//           name: "National Suicide Prevention Lifeline",
//           link: "https://suicidepreventionlifeline.org/",
//         },
//         {
//           id: 2,
//           name: "Crisis Text Line",
//           link: "https://www.crisistextline.org/",
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "Coping Strategies for Mental Health",
//       content:
//         "Coping strategies for mental health involve various techniques to manage stress, anxiety, and depression. Some effective coping strategies include practicing mindfulness and meditation, engaging in regular physical activity, maintaining a healthy diet, and getting enough sleep.",
//       supportMaterial: [
//         { id: 3, name: "Mindful", link: "https://www.mindful.org/" },
//         { id: 4, name: "Headspace", link: "https://www.headspace.com/" },
//       ],
//     },
//     {
//       id: 3,
//       title: "Supporting Loved Ones in Crisis",
//       content:
//         "Supporting loved ones in crisis can be challenging but essential. Listen actively, express empathy, and offer non-judgmental support. Encourage them to seek professional help if needed.",
//       supportMaterial: [
//         {
//           id: 5,
//           name: "NAMI - National Alliance on Mental Illness",
//           link: "https://www.nami.org/",
//         },
//         {
//           id: 6,
//           name: "SAMHSA - Substance Abuse and Mental Health Services Administration",
//           link: "https://www.samhsa.gov/",
//         },
//       ],
//     },

//     {
//       id: 4,
//       title: "Understanding the Impact of Bullying on Mental Health",
//       content:
//         "Bullying can have a severe impact on mental health, leading to increased stress, anxiety, and depression. Understanding the signs of bullying and providing support to those affected is essential for prevention.",
//       supportMaterial: [
//         {
//           id: 7,
//           name: "StopBullying.gov",
//           link: "https://www.stopbullying.gov/",
//         },
//         {
//           id: 8,
//           name: "Pacer's National Bullying Prevention Center",
//           link: "https://www.pacer.org/bullying/",
//         },
//       ],
//     },
//     {
//       id: 5,
//       title: "Promoting Emotional Wellness in the Workplace",
//       content:
//         "Creating a supportive work environment that prioritizes emotional wellness can lead to increased productivity and job satisfaction. Employers can implement strategies such as employee assistance programs, mental health resources, and stress management workshops.",
//       supportMaterial: [
//         {
//           id: 9,
//           name: "Mental Health America - Workplace Wellness",
//           link: "https://www.mhanational.org/workplace-wellness",
//         },
//         {
//           id: 10,
//           name: "CDC - Workplace Health Promotion",
//           link: "https://www.cdc.gov/workplacehealthpromotion/index.html",
//         },
//       ],
//     },
//     {
//       id: 6,
//       title: "Navigating Grief and Loss",
//       content:
//         "Grief and loss are natural responses to various life experiences, including the death of a loved one, divorce, or job loss. It's essential to acknowledge and process these emotions while seeking support from friends, family, or professional counselors.",
//       supportMaterial: [
//         {
//           id: 11,
//           name: "GriefShare - Grief Recovery Support Groups",
//           link: "https://www.griefshare.org/",
//         },
//         {
//           id: 12,
//           name: "American Hospice Foundation - Coping with Loss",
//           link: "https://americanhospice.org/coping-with-loss/",
//         },
//       ],
//     },

//   ];

//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-4xl font-bold text-center mt-8 mb-8 text-purple-600 ">
//         Support Resources for Suicide Prevention
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {articles.map((article) => (
//           <div
//             key={article.id}
//             className="bg-white border-2 p-6 rounded-lg shadow-md transition duration-300 hover:bg-purple-100 cursor-pointer"
//           >
//             <h2 className="text-xl font-semibold text-purple-600 mb-4">
//               {article.title}
//             </h2>
//             <p className="text-gray-700">{article.content}</p>
//             <div className="mt-4">
//               <h3 className="text-lg font-semibold mb-2">Support Material:</h3>
//               <ul className="text-gray-700">
//                 {article.supportMaterial.map((material) => (
//                   <li key={material.id} className="mb-1">
//                     <a
//                       href={material.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="hover:underline text-blue-500"
//                     >
//                       {material.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//    <div className="mt-9">
//    <Footer/>
//    </div>
//     </div>
//   );
// };

// export default SupportResources;

import React from "react";
import Footer from "../component/Footer";
import { motion } from "framer-motion";

const SupportResources = () => {
  const articles = [
    {
      id: 1,
      title: "Recognizing the Signs of Suicide",
      content:
        "Suicide signs include withdrawal, mood swings, and substance abuse. Early recognition can save lives. Reach out for help if you notice these signs.",
      supportMaterial: {
        id: 1,
        name: "National Suicide Prevention Lifeline",
        link: "https://suicidepreventionlifeline.org/",
      },
    },
    {
      id: 2,
      title: "Coping Strategies for Mental Health",
      content:
        "Manage stress and anxiety with mindfulness, exercise, and a healthy lifestyle. Small changes can make a big difference in mental well-being.",
      supportMaterial: {
        id: 2,
        name: "Mindful",
        link: "https://www.mindful.org/",
      },
    },
    {
      id: 3,
      title: "Supporting Loved Ones in Crisis",
      content:
        "Listen, show empathy, and encourage professional help when supporting someone in crisis. Your support can make a huge difference.",
      supportMaterial: {
        id: 3,
        name: "NAMI - National Alliance on Mental Illness",
        link: "https://www.nami.org/",
      },
    },
    {
      id: 4,
      title: "Understanding Bullying and Mental Health",
      content:
        "Bullying can cause stress, anxiety, and depression. Recognizing the signs and offering support is key to helping those affected.",
      supportMaterial: {
        id: 4,
        name: "StopBullying.gov",
        link: "https://www.stopbullying.gov/",
      },
    },
    {
      id: 5,
      title: "Emotional Wellness at Work",
      content:
        "A supportive workplace boosts productivity and happiness. Employers can offer mental health resources and stress management tools.",
      supportMaterial: {
        id: 5,
        name: "Mental Health America - Workplace Wellness",
        link: "https://www.mhanational.org/workplace-wellness",
      },
    },
    {
      id: 6,
      title: "Dealing with Grief and Loss",
      content:
        "Grief is a natural response to loss. Acknowledge your feelings and seek support from loved ones or professionals.",
      supportMaterial: {
        id: 6,
        name: "GriefShare - Grief Recovery Support Groups",
        link: "https://www.griefshare.org/",
      },
    },
    {
      id: 7,
      title: "Managing Anxiety in Daily Life",
      content:
        "Anxiety can be managed with deep breathing, relaxation, and professional help. Small steps can lead to big improvements.",
      supportMaterial: {
        id: 7,
        name: "Anxiety and Depression Association of America",
        link: "https://adaa.org/",
      },
    },
    {
      id: 8,
      title: "Building Resilience in Children",
      content:
        "Help children bounce back from challenges by teaching problem-solving skills and providing a supportive environment.",
      supportMaterial: {
        id: 8,
        name: "American Psychological Association - Resilience Guide",
        link: "https://www.apa.org/topics/resilience",
      },
    },
    {
      id: 9,
      title: "Understanding and Managing Depression",
      content:
        "Depression can be treated with therapy, medication, and lifestyle changes. Early recognition and help are crucial.",
      supportMaterial: {
        id: 9,
        name: "Depression and Bipolar Support Alliance",
        link: "https://www.dbsalliance.org/",
      },
    },
    {
      id: 10,
      title: "The Impact of Social Media on Mental Health",
      content:
        "Excessive social media use can lead to anxiety, depression, and low self-esteem. Setting limits and mindful usage can help maintain mental well-being.",
      supportMaterial: {
        id: 10,
        name: "Center for Humane Technology",
        link: "https://www.humanetech.com/",
      },
    },
    {
      id: 11,
      title: "Practicing Self-Care for Mental Wellness",
      content:
        "Self-care routines, including sleep, exercise, and relaxation, can improve mental health and overall well-being.",
      supportMaterial: {
        id: 11,
        name: "Mental Health Foundation - Self Care",
        link: "https://www.mentalhealth.org.uk/publications/guide-investing-your-wellbeing",
      },
    },
    {
      id: 12,
      title: "Breaking the Stigma Around Mental Health",
      content:
        "Open conversations and education can help break the stigma surrounding mental health, making it easier for individuals to seek help.",
      supportMaterial: {
        id: 12,
        name: "Bring Change to Mind",
        link: "https://www.bringchange2mind.org/",
      },
    },
    {
      id: 13,
      title: "Handling Panic Attacks Effectively",
      content:
        "Panic attacks can be overwhelming, but deep breathing, grounding techniques, and seeking support can help manage them. Recognizing triggers is key to prevention.",
      supportMaterial: {
        id: 13,
        name: "Panic Disorder Support - ADAA",
        link: "https://adaa.org/understanding-anxiety/panic-disorder",
      },
    },
    {
      id: 14,
      title: "The Role of Nutrition in Mental Health",
      content:
        "A balanced diet with essential nutrients supports brain function and emotional well-being. Eating healthy can help reduce stress, anxiety, and depression.",
      supportMaterial: {
        id: 14,
        name: "Harvard Health - Nutrition and Mental Health",
        link: "https://www.health.harvard.edu/blog/nutritional-psychiatry-your-brain-on-food-201511168626",
      },
    },
    {
      id: 15,
      title: "Digital Detox for Better Mental Well-Being",
      content:
        "Reducing screen time and taking regular breaks from digital devices can improve focus, reduce stress, and enhance emotional health.",
      supportMaterial: {
        id: 15,
        name: "National Day of Unplugging",
        link: "https://www.nationaldayofunplugging.com/",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 py-8 px-6">
      {/* Animated Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-purple-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Support Resources
      </motion.h1>

      {/* Grid Layout for Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <motion.a
            key={article.id}
            href={article.supportMaterial.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-white/20 transition-all duration-300 ease-out hover:scale-105 hover:bg-purple-50/50 hover:shadow-[0px_4px_20px_rgba(128,0,128,0.3)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 6px 20px rgba(128, 0, 128, 0.4)",
              backgroundColor: "rgba(245, 245, 245, 0.8)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-purple-700 mb-3">
              {article.title}
            </h2>
            <p className="text-gray-600 mb-4">{article.content}</p>

            <div className="mt-4">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">
                Support Material:
              </h3>
              <p className="text-blue-500 font-medium hover:text-blue-700 transition">
                {article.supportMaterial.name}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-14 -mb-[2.85rem] -mr-6 -ml-6">
        <Footer />
      </div>
    </div>
  );
};

export default SupportResources;
