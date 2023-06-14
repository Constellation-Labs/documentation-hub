---
title: Customization
sidebar_label: Customization
hide_table_of_contents: false
---

<intro-end />

An example demo is available demonstrating substantial customization of these concepts for the purposes of data validation: [Alkimi Exchange Demo](https://github.com/Alkimi-Exchange/state-channel-demo) — this can provide some clarity as to one form of extensions of these methods beyond a simple currency application.

Within this, we see an [example of customized API endpoints](https://github.com/Alkimi-Exchange/state-channel-demo/blob/main/src/main/scala/com/tessellation/demo/http/DemoRoutes.scala#L87) following these conventions where we are using a custom data type representing a non-standard transaction format: 

```scala
case request @ POST -> Root / "data-transactions" / "sign" =>
      val lastSnapshotHash = request.params.get("lastSnapshotHash").fold(Hash.empty)(Hash(_))

      def dataTransactionsFromRequest() =
        request
          .attemptAs[DataTransaction]
          .toOption
          .fold(request.as[List[DataTransaction]])(t => List(t).pure)
          .flatten
```

This endpoint is used for signing non-currency transaction data for preparation to addition to a consensus stage with a custom validation criteria.

The [validator]([https://github.com/Alkimi-Exchange/state-channel-demo/blob/main/src/main/scala/com/tessellation/demo/validators/DataTransactionValidator.scala](https://github.com/Alkimi-Exchange/state-channel-demo/blob/main/src/main/scala/com/tessellation/demo/validators/DataTransactionValidator.scala)) in this case is quite simple, and just checks if the string length is greater than some value:
```scala
  private [validators] def validateOne(dataTransaction : DataTransaction): ValidatedNec[DataTransactionValidationError, DataTransaction] = {
    val validatedLength: Either[DataTransactionValidationError, DataTransaction] =
      if (dataTransaction.txnid.length > 5) Right(dataTransaction)
      else Left(DataTransactionValidationError(s"txnid length must be greater than 5 but was ${dataTransaction.txnid}"))

    val validatedData1: Either[DataTransactionValidationError, DataTransaction] =
      if (dataTransaction.data1 > 0) Right(dataTransaction)
      else Left(DataTransactionValidationError(s"data1 must be greater than 0 but was ${dataTransaction.data1}"))

    validatedLength.toValidatedNec.productR(validatedData1.toValidatedNec)
  }
```