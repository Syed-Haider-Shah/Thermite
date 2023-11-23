const Tag = ({ children, title }: { children: string; title?: string }) => {
  return (
    <div
      title={title}
      className="h-min cursor-pointer rounded-full border border-indigo px-4.5 pb-1 pt-1 text-center text-sm font-semibold leading-5 text-black/50 transition-colors duration-300 hover:bg-indigo hover:text-white/90"
    >
      {children}
    </div>
  )
}

export default Tag
