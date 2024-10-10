const getSeed = () => {
  return Math.round(Math.random() * 100);
};

export const messagesTestDate = [
  {
    avatarSrc: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${getSeed()}`,
    userName: "Ada",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`,
    timestamp: "22.11.2024 16:23",
  },
  {
    avatarSrc: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${getSeed()}`,
    userName: "Leon",
    message: `Lorem ipsum dolor.`,
    timestamp: "15.12.2024 13:23",
  },
  {
    avatarSrc: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${getSeed()}`,
    userName: "Jill",
    message: `Lorem.`,
    timestamp: "15.12.2024 13:25",
  },
  {
    avatarSrc: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${getSeed()}`,
    userName: "Ellie",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    timestamp: "15.12.2024 13:30",
  },
  {
    avatarSrc: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${getSeed()}`,
    userName: "Chris",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.`,
    timestamp: "16.12.2024 13:23",
  },
  {
    avatarSrc: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${getSeed()}`,
    userName: "Claire",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `,
    timestamp: "16.12.2024 13:45",
  },
  {
    avatarSrc: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${getSeed()}`,
    userName: "Albert",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️`,
    timestamp: "16.12.2024 15:25",
  },
  {
    avatarSrc: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${getSeed()}`,
    userName: "Rebecca",
    message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.`,
    timestamp: "18.12.2024 09:23",
  },
];
