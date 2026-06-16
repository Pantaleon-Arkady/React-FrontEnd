import React from 'react';

function AppLayout({
  header = <div className="h-100 d-flex align-items-center px-3">Header</div>,
  leftSidebar,
  mainContent,
  rightSidebar,
}) {
  return (
    <div className="vh-100 d-flex flex-column bg-light overflow-hidden">
      <header className="bg-white border m-2 flex-shrink-0 rounded shadow-sm">
        {header}
      </header>

      <main className="flex-grow-1 d-flex gap-2 px-2 pb-2 overflow-hidden">
        <aside
          className="bg-white border rounded shadow-sm overflow-auto"
          style={{ flex: '0 0 25%', minWidth: '280px' }}
        >
          {leftSidebar || <DefaultLeftSidebar />}
        </aside>

        <section
          className="bg-white border rounded shadow-sm overflow-auto flex-grow-1"
          style={{ flex: '0 0 50%', minWidth: '400px' }}
        >
          {mainContent || <DefaultMainContent />}
        </section>

        <aside
          className="bg-white border rounded shadow-sm overflow-auto"
          style={{ flex: '0 0 25%', minWidth: '280px' }}
        >
          {rightSidebar || <DefaultRightSidebar />}
        </aside>
      </main>
    </div>
  );
}

function DefaultLeftSidebar() {
  return (
    <div className="p-3">
      <h5 className="mb-3">Features</h5>
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="border rounded p-3 mb-3 bg-light">
          Feature {i + 1}
        </div>
      ))}
    </div>
  );
}

function DefaultMainContent() {
  return (
    <div className="p-4">
      <h4 className="mb-4">Main Content Area</h4>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="border rounded p-4 mb-4" style={{ minHeight: '160px' }}>
          Main Feature Block {i + 1}
        </div>
      ))}
    </div>
  );
}

function DefaultRightSidebar() {
  return (
    <div className="p-3">
      <h5 className="mb-3">Right Panel</h5>
      <div className="border rounded p-3 mb-3">Right Feature</div>
    </div>
  );
}

export default AppLayout;