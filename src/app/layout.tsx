export const metadata = {
  title: "Victor Merseguel",
  description: "",
  icons: {
    icon: "/victoricon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
