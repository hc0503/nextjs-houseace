module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        red: {
          150: "#EEEEEE",
          160: "#FAF9FC",
          lesslight: "#FFE8E8",
          light: "#F87171",
          DEFAULT: "#F96868",
          dark: "#EF4444",
          moredark: "#DC2626"
        },
        gray: {
          lesslight: "#E5E7EB",
          light: "#959595",
          DEFAULT: "#616161",
          dark: "#161616",
          moredark: "#4B5563"
        },
        custom: {
          profile: "#D5D2C8"
        }
      },
      maxWidth: {
        message: "919px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/landing/banner.png')",
      },
      fontFamily: {
        'montserrat': 'MontserratRegular',
        'montserrat-bold': 'MontserratBold',
        'montserrat-semibold': 'MontserratSemiBold',
        'montserrat-medium': 'MontserratMedium',
      },
      fontSize: {
        '2xs': '.375rem'
      },
      container: {
        padding: '1rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover']
    },
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
