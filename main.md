
```dart

import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'じゃんけん',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'じゃんけん'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              child: Image.asset(
                img_path,
                width: 200,
                height: 200,
              ),
            ),
            SizedBox(height: 50),
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      
                    },
                    child: Text("グー"),
                  ),
                  SizedBox(width: 50),
                  ElevatedButton(
                    onPressed: () {
                      
                    },
                    child: Text("チョキ"),
                  ),
                  SizedBox(width: 50),
                  ElevatedButton(
                    onPressed: () {
                      
                    },
                    child: Text("パー"),
                  ),
                ],
              ),
            ),
            SizedBox(height: 50),
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Image.asset(
                    my_img_path,
                    width: 200,
                    height: 200,
                  )
                ],
              ),
            ),
            SizedBox(height: 50),
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("勝負"),
                  
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}



```

```dart

import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'じゃんけん',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'じゃんけん'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String img_path = "images/janken.png";
  String my_img_path = "images/janken.png";
  String kekka = "";

  void judge(myhand) {
    int rand = Random().nextInt(3) + 1;

    if (rand == 1) {
      img_path = "images/janken_gu.png";
    } else if (rand == 2) {
      img_path = "images/janken_choki.png";
    } else {
      img_path = "images/janken_pa.png";
    }

    if (myhand == 1) {
      my_img_path = "images/janken_gu.png";
    } else if (myhand == 2) {
      my_img_path = "images/janken_choki.png";
    } else {
      my_img_path = "images/janken_pa.png";
    }

    if (myhand == rand) {
      kekka += "△";
    } else if (myhand == 1 && rand == 3 ||
        myhand == 2 && rand == 1 ||
        myhand == 3 && rand == 2) {
      kekka += "×";
    } else {
      kekka += "⭕️";
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(
              child: Image.asset(
                img_path,
                width: 200,
                height: 200,
              ),
            ),
            SizedBox(height: 50),
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      judge(1);
                    },
                    child: Text("グー"),
                  ),
                  SizedBox(width: 50),
                  ElevatedButton(
                    onPressed: () {
                      judge(2);
                    },
                    child: Text("チョキ"),
                  ),
                  SizedBox(width: 50),
                  ElevatedButton(
                    onPressed: () {
                      judge(3);
                    },
                    child: Text("パー"),
                  ),
                ],
              ),
            ),
            SizedBox(height: 50),
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Image.asset(
                    my_img_path,
                    width: 200,
                    height: 200,
                  )
                ],
              ),
            ),
            SizedBox(height: 50),
            Container(
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("勝負"),
                  Text("$kekka"),
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}



```
