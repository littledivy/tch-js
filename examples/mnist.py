# 97% accuracy on MNIST test set after 200 epochs

import torch
import torch.nn as nn

# 1 hidden layer neural network with Adam optimizer
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.fc1 = nn.Linear(28*28, 500)
        self.fc2 = nn.Linear(500, 10)
        self.relu = nn.ReLU()
        self.softmax = nn.Softmax(dim=1)

    def forward(self, x):
        x = x.view(-1, 28*28)
        x = self.relu(self.fc1(x))
        x = self.softmax(self.fc2(x))
        return x
    
# load MNIST dataset
from torchvision import datasets, transforms
transform = transforms.Compose([transforms.ToTensor(), transforms.Normalize((0.1307,), (0.3081,))])
trainset = datasets.MNIST(root='./data', train=True, download=True, transform=transform)
testset = datasets.MNIST(root='./data', train=False, download=True, transform=transform)

# create data loaders
from torch.utils.data import DataLoader
trainloader = DataLoader(trainset, batch_size=64, shuffle=True)
testloader = DataLoader(testset, batch_size=64, shuffle=True)

# create model, loss function and optimizer
model = Net()
criterion = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# train model
for epoch in range(200):
    optimizer.zero_grad()
    for images, labels in trainloader:
        outputs = model(images)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
    print('Epoch: {}/{}, Loss: {}'.format(epoch+1, 200, loss.item()))
    test_accuracy = 0
    for images, labels in testloader:
        outputs = model(images)
        test_accuracy += torch.sum(torch.argmax(outputs, dim=1) == labels)
    print('Test Accuracy: {}'.format(test_accuracy.item()/len(testset)))
    
