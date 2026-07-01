function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-4">
        {links.map((link) => (
          <li
            key={link}
            className="cursor-pointer text-gray-300 transition hover:text-green-400"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;