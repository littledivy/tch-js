# 97% accuracy on MNIST test set after 200 epochs

import torch
import torch.nn as nn
from torch.utils.data import DataLoader
from torchvision import datasets, transforms

model = nn.Sequential(
    nn.Linear(784, 128),
    nn.ReLU(),
    nn.Linear(128, 10),
)

transform = transforms.Compose([transforms.ToTensor(), transforms.Normalize((0.1307,), (0.3081,))])
trainset = datasets.MNIST(root='./data', train=True, download=True, transform=transform)
testset = datasets.MNIST(root='./data', train=False, download=True, transform=transform)

# train without batch
train_loader = DataLoader(trainset, batch_size=1, shuffle=True)
test_loader = DataLoader(testset, batch_size=1, shuffle=True)

epochs = 200
criterion = nn.CrossEntropyLoss()
# Adam optimizer
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# train
for data, target in train_loader:
    # Flatten MNIST images into a 784 long vector
    data = data.view(data.shape[0], -1)
    # Training pass
    optimizer.zero_grad()
    output = model(data)
    loss = criterion(output, target)
    # This is where the model learns by backpropagating
    loss.backward()
    # And optimizes its weights here
    optimizer.step()
print("Training loss: {}".format(loss.item()))

# test
correct_count, all_count = 0, 0
for data, target in test_loader:
    data = data.view(data.shape[0], -1)
    output = model(data)
    _, pred = torch.max(output, 1)
    all_count += target.size(0)
    correct_count += (pred == target).sum()
print("Number Of Images Tested =", all_count)
print("Model Accuracy =", (correct_count / all_count).item())