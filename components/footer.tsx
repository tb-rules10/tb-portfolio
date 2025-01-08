import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-background py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tanishq Bhatt. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="https://leetcode.com/u/tanishqbhatt10/" className="text-sm text-muted-foreground hover:text-primary">
              LeetCode
            </Link>
            <Link href="https://linkedin.com/in/tanishq10" className="text-sm text-muted-foreground hover:text-primary">
              LinkedIn
            </Link>
            <Link href="https://github.com/tb-rules10" className="text-sm text-muted-foreground hover:text-primary">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

