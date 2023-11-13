'use client'

import { useModal } from '@/hooks/useModal'
import { Button, Title } from '@tremor/react'

export default function Modal() {
  const { showModal, title, content, closeBtnTitle, closeModal } = useModal()

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative min-w-full p-12 my-6 mx-auto max-h-full lg:min-w-[50%] lg:max-w-[50%]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 border-b border-solid border-slate-200 rounded-t">
                  <div className="text-gray-600 w-full text-xl font-semibold font-">
                    {title}
                  </div>
                </div>
                <div className="relative p-4 text-slate-600">{content}</div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                  <Button onClick={closeModal}>{closeBtnTitle}</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
