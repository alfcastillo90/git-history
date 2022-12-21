export const Nav = () => {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="/user-info"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  User information
                </a>

                <a
                  href="/commit-history"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Git history
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a
            href="/user-info"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            User information
          </a>

          <a
            href="/commit-history"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Git history
          </a>
        </div>
      </div>
    </nav>
  );
};
