export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'My Title',
}