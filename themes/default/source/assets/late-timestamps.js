$("time.x-late-timestamp").each((index, element) => {
  const timestamp = Number(element.textContent)
  element.textContent = new Date(timestamp).toLocaleString()
})
