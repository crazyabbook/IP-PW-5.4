const items = document.querySelectorAll('.item');
const displayCount = document.getElementById('displayCount');
const displayPrice = document.getElementById('displayPrice');

const state = {
    selectedCount: 0,
    selectedPrice: 0,
    updateUI() {
        displayCount.textContent = this.selectedCount;
        displayPrice.textContent = this.selectedPrice;
    },
    toggleItem(isSelected, itemValue) {
        if (isSelected) {
            this.selectedCount += 1;
            this.selectedPrice += itemValue;
        } else {
            this.selectedCount -= 1;
            this.selectedPrice -= itemValue;
        }
        this.updateUI();
    }
};

const handleItemClick = (event) => {
    const clickedItem = event.target;
    const itemValue = Number(clickedItem.textContent);
    const isSelected = clickedItem.classList.toggle('selected');
    state.toggleItem(isSelected, itemValue);
};

items.forEach((item) => {
    item.addEventListener('click', handleItemClick);
});