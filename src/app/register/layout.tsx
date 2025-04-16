// app/register/layout.tsx
export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return (
      <main className="min-h-screen bg-white text-black">
        <div className="max-w-4xl mx-auto p-6">
          <header className="mb-6 border-b pb-4">
            <h1 className="text-2xl font-semibold">Business Registration Portal</h1>
          </header>
          {children}
        </div>
      </main>
    );
  }
  