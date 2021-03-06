import {
  MobileClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../MobileClient";
import { DescribeBundleRequest, DescribeBundleResult } from "../models/index";
import {
  deserializeAws_restJson1_1DescribeBundleCommand,
  serializeAws_restJson1_1DescribeBundleCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type DescribeBundleCommandInput = DescribeBundleRequest;
export type DescribeBundleCommandOutput = DescribeBundleResult &
  __MetadataBearer;

export class DescribeBundleCommand extends $Command<
  DescribeBundleCommandInput,
  DescribeBundleCommandOutput,
  MobileClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBundleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MobileClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBundleCommandInput, DescribeBundleCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeBundleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DescribeBundleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBundleCommandOutput> {
    return deserializeAws_restJson1_1DescribeBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
