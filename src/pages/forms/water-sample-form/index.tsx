import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { yupResolver } from '@hookform/resolvers/yup'

import {
  Button,
  ComboBox,
  DatePicker,
  ImagePicker,
  RadioButton,
  TextArea
} from '@/components'
import ComboInput from '@/components/ComboBox/ComboInput'
import { supabase } from '@/services/supabase'
import { IRow } from '@/types/supabaseTables'
import { cn } from '@/utils/cn'
import { uploadImage } from '@/utils/uploadFile'
import { WaterFormSchema } from '@/utils/yupConfig'

const WaterForm = () => {
  const [ticketList, setTicketList] = useState<IRow[]>([])
  const [isSavingForm, setIsSavingForm] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [waterTestRead, setWaterTestRead] = useState<Date>(new Date())
  const [waterTestSample, setWaterTestSample] = useState<Date>(new Date())
  const [waterTestVial, setWaterTestVial] = useState<Date>(new Date())
  const [type, setType] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(WaterFormSchema),
    mode: 'onBlur',
    defaultValues: {
      comment: '',
      region: '',
      result: '',
      panel: ''
    }
  })

  useEffect(() => {
    if (errors.comment?.message) toast.error(errors.comment.message)
    else if (errors.panel?.message) toast.error(errors.panel.message)
    else if (errors.region?.message) toast.error(errors.region.message)
    else if (errors.result?.message) toast.error(errors.result.message)
  }, [errors])

  const fetchTickets = useCallback(async (search: string) => {
    if (search === '') {
      setTicketList([])
      return
    }
    setIsLoading(true)

    const { data, error } = await supabase
      .rpc('get_parent_tickets')
      .eq('status', 'WATER-SAMPLE')
      .ilike('address', `%${search}%`)
      .select('address, status, id')

    setIsLoading(false)

    if (data) setTicketList(data)
    else if (error) toast.error(error.message)
  }, [])

  const handleSelect = useCallback((val: string) => {
    setSelected(val)
    setTicketList([])
  }, [])

  const handleFormSubmit = useCallback(
    async ({
      region,
      comment,
      panel,
      result
    }: {
      region: string
      panel: string
      result: string
      comment: string
    }) => {
      setIsSavingForm(true)
      let filePath: string = ''
      let deleteImage: () => Promise<void> = async () => {}
      if (imageFile) {
        const { url, onDelete, error } = await uploadImage(
          imageFile,
          'water_sample',
          `${Date.now()}`
        )
        if (error) {
          setIsSavingForm(false)
          return
        }
        filePath = url
        deleteImage = onDelete
      }

      const { error } = await supabase.rpc('fill_water_sample', {
        commnts: comment,
        img: filePath,
        panel_gen: panel,
        par_id: Number(selected),
        reg: region,
        reslt: result,
        samp_time_date: waterTestSample.toISOString(),
        samp_time_date_read: waterTestRead.toISOString(),
        test_exp_date: waterTestVial.toISOString(),
        typ: type
      })
      setIsSavingForm(false)
      if (error) {
        await deleteImage()
        toast.error(error.message)
      }
    },
    [imageFile, selected, type, waterTestRead, waterTestSample, waterTestVial]
  )

  return (
    <div className=" flex h-auto max-w-xl flex-col bg-white pb-20 shadow-lg md:mx-20">
      <div className="m-10 mt-24 flex flex-wrap text-xl font-bold text-darkIndigo md:ml-40">
        Water Sample Form
      </div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="mx-auto flex h-full w-4/5 flex-wrap items-center gap-8 bg-white "
      >
        <ComboBox
          title="Ticket Name"
          items={ticketList}
          className="w-[48%]"
          field="address"
          isLoading={isLoading}
          onSearch={fetchTickets}
          onSelect={handleSelect}
        />
        <ComboInput
          title="Panel Generation"
          className="h-12 w-[48%]"
          {...register('panel')}
        />

        <div className="flex w-[48%] flex-col gap-2">
          <div className="text-md w-fit bg-white px-1 font-bold">
            Standard Water Test Results Image (No UV Black Light)
          </div>
          <div className="flex items-center gap-5">
            <ImagePicker
              setAvatar={setImageFile}
              className="h-9 w-40 justify-center rounded-md bg-activeBlue text-sm text-white [&>label]:h-min [&>label]:border-0"
            />
            <div className="text-gray">
              {imageFile ? imageFile.name : 'No File Chosen'}
            </div>
          </div>
        </div>
        <div className="flex w-[48%] flex-col justify-center gap-2 pl-1">
          <div className="flex text-sm font-semibold">
            Where did you collect the sample from?
          </div>
          <div className="flex gap-5 pl-1 text-xs">
            <RadioButton setValue={setType} value="hub" name="HUB" />
            <RadioButton setValue={setType} value="spoke" name="SPOKE" />
            <RadioButton setValue={setType} value="both" name="BOTH" />
          </div>
        </div>
        <ComboInput
          title="Region"
          className="w-[48%]"
          {...register('region')}
        />
        <ComboInput
          className="w-[48%]"
          title="Water Test Sample Result"
          {...register('result')}
        />
        <DatePicker
          className="w-[48%]"
          setValue={setWaterTestRead}
          value={waterTestRead}
          id="date-picker3"
          title="Water Test Read Date & Time"
          showTime
        />
        <DatePicker
          className="w-[48%]"
          setValue={setWaterTestVial}
          value={waterTestVial}
          id="date-picker1"
          title="Water Test Vial Expiration Date"
        />
        <DatePicker
          id="date-picker2"
          setValue={setWaterTestSample}
          value={waterTestSample}
          title="Water Test Sample Date & Time"
          className="w-[48%]"
          showTime
        />
        <fieldset
          className={cn(
            'box-border w-[48%] rounded-lg border-4',
            'border-loadGray focus-within:border-loadBlue'
          )}
        >
          <div className="w-fit -translate-y-3 translate-x-6 bg-white px-1 text-sm">
            Comments
          </div>
          <TextArea
            id="ticket"
            className="-translate-y-3 text-black/90"
            placeholder="Select a Ticket"
            {...register('comment')}
            custForm
          />
        </fieldset>

        <Button
          isLoading={isSavingForm}
          type="submit"
          className="mx-auto w-1/2 rounded bg-loadBlue p-2 font-bold text-white"
        >
          SUBMIT
        </Button>
      </form>
    </div>
  )
}

export default WaterForm
