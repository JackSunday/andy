---
sidebar: auto
---

# 组件

## ITable

-   ITable 组件的使用

```html
<i-table
	:emptySlot="emptySlot"
	:tableData="tableData"
	:columns="columns"
	:operateColumn="operateColumn"
	:pagination="pagination"
	@current-change="currentChange"
>
	<div slot="empty">2222</div>
</i-table>
<script>
export default {
	data() {
		return {
			emptySlot: true,
			stripe: true,
			columns: [
				{
					prop: 'selection',
					type: 'selection',
				},
				{
					prop: 'index',
					type: 'index',
					label: '序号',
					width: 200,
				},
			],
			tableData: [
				{ id: 1, date: '20120', name: '邵阳' },
				{ id: 3, date: '20120', name: '邵阳' },
			],
			pagination: {
				currentPage: 2,
				total: 20,
				pageSize: 10,
			},
			operateColumn: {
				width: 350,
				fixed: 'right',
				label: '其他',
				list: [
					{
						type: 'warning',
						name: '编辑',
						size: 'small',
						format: () => `<span>编辑</span>`,
						method: () => {
							alert('你好啥样')
						},
					}
				],
			},
		}
	},
	methods: {
		currentChange(page) {
			this.pagination.currentPage = page
		},
		
	}
}
</script>
```


## ISearch 

-   ISearch 组件的使用