// app/register/layout.tsx
export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
      <main className="min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto p-6">
          {children}
        </div>
      </main>
    );
  }
  