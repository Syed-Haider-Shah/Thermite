import { useParams } from 'next/navigation'

import { memo, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import { Button, SearchBar, Table } from '@/components'
import { supabase } from '@/services/supabase'
import { IEmployee, IRow } from '@/types/supabaseTables'

import Modal from '../Modal'

const cols = [
  {
    field: 'id',
    name: 'ID'
  },
  {
    field: 'name',
    name: 'Name'
  },
  {
    field: 'country',
    name: 'Country'
  }
]

const AssignEmployee = ({ fetchDetails }: { fetchDetails: () => void }) => {
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const [showModal, setShowModal] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedRow, setSelectedRow] = useState<string>('')
  const [isCreating, setIsCreating] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  const handleShowModal = useCallback(() => setShowModal(true), [])
  const handleBlur = useCallback(() => setShowModal(false), [])

  const handleSearch = useCallback((text: string) => {
    setSearch(text)
  }, [])

  const { pid } = useParams() || { pid: '' }

  const handleRowSelect = useCallback((row: IRow) => {
    if (row.id) setSelectedRow(row.id.toString())
  }, [])

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true)

    const query = supabase.from('employees').select()

    if (search) query.ilike('', `%${search}%`)

    const { data: rows, error } = await query

    setIsLoading(false)

    if (rows) setEmployees(rows as IEmployee[])
    else if (error) toast.error(error.message)
  }, [search])

  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  const handleAssignEmployee = useCallback(async () => {
    if (!selectedRow) return

    setIsCreating(true)
    const { error } = await supabase.rpc('assign_employee', {
      parent_id: Number(pid),
      new_employee: selectedRow
    })
    setIsCreating(false)

    if (error) toast.error(error.message)
    else {
      setShowModal(false)
      fetchDetails()
    }
  }, [fetchDetails, pid, selectedRow])

  return (
    <>
      <Button
        className="w-full border py-1 text-indigo"
        onClick={handleShowModal}
      >
        Assign
      </Button>
      <Modal showModal={showModal} onClose={handleBlur} title="Select Employee">
        <div className="relative mb-12 mt-5 space-y-5">
          <SearchBar
            onSearch={handleSearch}
            placeholder="Search for Employees"
          />
          <Table
            onRowSelect={handleRowSelect}
            selectedRow={selectedRow}
            isLoading={isLoading}
            cols={cols}
            rows={employees}
          />
          {selectedRow && (
            <Button
              onClick={handleAssignEmployee}
              isLoading={isCreating}
              className="absolute right-0 w-min"
              active
            >
              Assign
            </Button>
          )}
        </div>
      </Modal>
    </>
  )
}

export default memo(AssignEmployee)
