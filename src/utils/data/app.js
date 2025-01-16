import { type } from "@testing-library/user-event/dist/type";
import myBudgetScreen from "../../assets/projects/myBudgetScreen.png";

const appli = {
  en: [
    {
      title: "MyBudget",
      type: "Application IOS/Android",
      tags: ["IOS / Android", "React-Native", "State managment"],
      link: "https://github.com/LauerJonathan/myBudget/tree/main",
      description:
        "A React Native mobile application for personal budget management, developed with Expo. This app allows users to track their expenses and income with features including recurring transactions, spending categories, and detailed statistics. Users can monitor their current and projected balances, analyze their spending patterns through visual charts, and manage both one-time and recurring transactions. The app uses AsyncStorage for local data persistence and includes comprehensive transaction management, budget tracking, and statistical analysis tools.",
      screen: myBudgetScreen,
    },
  ],
  fr: [
    {
      title: "MyBudget",
      type: "Application IOS/Android",
      tags: ["IOS / Android", "React-Native", "State managment"],
      link: "https://github.com/LauerJonathan/myBudget/tree/main",
      description:
        "A React Native mobile application for personal budget management, developed with Expo. This app allows users to track their expenses and income with features including recurring transactions, spending categories, and detailed statistics. Users can monitor their current and projected balances, analyze their spending patterns through visual charts, and manage both one-time and recurring transactions. The app uses AsyncStorage for local data persistence and includes comprehensive transaction management, budget tracking, and statistical analysis tools.",
      screen: myBudgetScreen,
    },
  ],
};

export { appli };
