import dynamic from 'next/dynamic'

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

import 'react-quill/dist/quill.snow.css'

import { Page } from '@/components'

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link', 'image', 'video'],
    ['clean']
  ]
}

const ParentNotes = () => {
  return (
    <section className="w-full px-9 flex gap-14">
      <div className="h-72 shadow-md w-2/5 rounded-5 overflow-hidden border border-black/40">
        <ReactQuill theme="snow" modules={modules} className="h-full" />
      </div>
      <div className="rounded border-t-8 px-4 border-darkGray shadow-md h-72 overflow-y-scroll scrollbar-none w-2/5">
        <h1 className="text-lg bg-white w-full font-medium py-3 text-darkGray flex gap-2">
          <Page /> All Notes
        </h1>
        <ul className="space-y-3 mt-1">
          <li className="rounded bg-black/10 px-3.5 py-2 gap-2">
            <h2 className="font-normal">title</h2>
            <p className="text-black/60 line-clamp-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the
            </p>
          </li>
          <li className="rounded bg-black/10 px-3.5 py-2 gap-2">
            <h2 className="font-normal">title</h2>
            <p className="text-black/60 line-clamp-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the
            </p>
          </li>
          <li className="rounded bg-black/10 px-3.5 py-2 gap-2">
            <h2 className="font-normal">title</h2>
            <p className="text-black/60 line-clamp-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default ParentNotes
